import eventBus from './eventBus';
import { type ErrorModalContent } from '../types';

/**
 * Handles API errors by dispatching an event to show a modal, rather than throwing.
 * This function is centralized to be reused across different AI service calls.
 * @param {unknown} error - The error caught from the API call.
 */
export const handleApiError = (error: unknown): void => {
    console.error("Original API Error:", error);
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else {
        message = String(error);
    }
    
    const lowerCaseMessage = message.toLowerCase();
    let suggestion = '';
    let title = 'An Error Occurred';

    const isApiKeyError = 
        lowerCaseMessage.includes('403') || 
        lowerCaseMessage.includes('401') || 
        lowerCaseMessage.includes('permission denied') ||
        lowerCaseMessage.includes('api key not valid');

    if (isApiKeyError) {
        eventBus.dispatch('initiateAutoApiKeyClaim');
    }

    const hasExistingSuggestion = 
        lowerCaseMessage.includes('please ensure') || 
        lowerCaseMessage.includes('please try');

    if (!hasExistingSuggestion) {
        if (isApiKeyError) {
            title = 'API Key Error';
            suggestion = 'Your API Key seems to be invalid or lacks permissions. Please check your key in Settings or claim a new one.';
        } else if (lowerCaseMessage.includes('400') || lowerCaseMessage.includes('bad request')) {
            title = 'Invalid Request';
            suggestion = 'Your prompt or image may have been blocked by safety filters. Please try rephrasing your request or using a different image.';
        } else if (lowerCaseMessage.includes('429') || lowerCaseMessage.includes('resource exhausted')) {
            title = 'Rate Limit Exceeded';
            suggestion = 'You\'ve sent too many requests in a short time. Please wait for a minute before trying again.';
        } else if (lowerCaseMessage.includes('500') || lowerCaseMessage.includes('503')) {
            title = 'Server Error';
            suggestion = 'There was a temporary issue on Google\'s side. Please try again in a few moments.';
        }
    }

    if (lowerCaseMessage.includes('failed to fetch')) {
        title = 'Network Error';
        message = 'Could not connect to the server. Please check your internet connection and try again.';
        suggestion = '';
    }
    
    let userFriendlyMessage = message.split('\n')[0];
    
    if (lowerCaseMessage.includes('api key not valid')) {
        userFriendlyMessage = 'Your API Key is not valid.';
    }

    const modalContent: ErrorModalContent = {
        title,
        message: userFriendlyMessage,
        suggestion: suggestion,
        rawError: error,
    };
    
    // Dispatch an event for the UI to handle, instead of throwing.
    eventBus.dispatch('showErrorModal', modalContent);
};