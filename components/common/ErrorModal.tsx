import React, { useState } from 'react';
import { type ErrorModalContent } from '../../types';
import { XIcon, AlertTriangleIcon, CheckCircleIcon } from '../Icons';
import Spinner from './Spinner';

interface ErrorModalProps {
    isOpen: boolean;
    errorContent: ErrorModalContent;
    onClose: () => void;
    onReport: () => Promise<void>;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, errorContent, onClose, onReport }) => {
    const [isReporting, setIsReporting] = useState(false);
    const [reportSuccess, setReportSuccess] = useState(false);

    const handleReport = async () => {
        setIsReporting(true);
        setReportSuccess(false);
        try {
            await onReport();
            setReportSuccess(true);
        } finally {
            setIsReporting(false);
        }
    };

    if (!isOpen) return null;

    const { title, message, suggestion } = errorContent;

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-zoomIn" 
            aria-modal="true" 
            role="dialog"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl w-full max-w-lg m-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                            <AlertTriangleIcon className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white" id="modal-title">
                                {title}
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                    {message}
                                </p>
                                {suggestion && (
                                    <p className="mt-3 text-sm text-red-600 dark:text-red-400 p-3 bg-red-500/10 rounded-md border border-red-500/20">
                                        <strong>Note:</strong> {suggestion}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800/50 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3">
                    <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto sm:text-sm disabled:opacity-50"
                        onClick={handleReport}
                        disabled={isReporting || reportSuccess}
                    >
                        {isReporting ? <Spinner /> : reportSuccess ? <CheckCircleIcon className="w-5 h-5"/> : null}
                        {reportSuccess ? 'Reported' : 'Report to Admin'}
                    </button>
                    <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 px-4 py-2 text-base font-medium text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;