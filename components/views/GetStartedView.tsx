import React from 'react';
import { CheckCircleIcon, XIcon } from '../Icons';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="py-6 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
        <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4 sm:text-2xl">{title}</h3>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300">{children}</div>
    </div>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-6">
        <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 mb-2">{title}</h4>
        <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </div>
);

interface GetStartedViewProps {
}

const GetStartedView: React.FC<GetStartedViewProps> = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-left mb-10">
                <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
                    Get Started Guide
                </h1>
                <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">
                    Your comprehensive guide to mastering the MONOklix.com AI platform.
                </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-lg shadow-lg">
                <Section title="Chapter 1: Account & API Key Setup">
                    <SubSection title="How to Login">
                        <p>This platform uses a simple, passwordless login system. Follow these steps:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>Ensure you have already registered and made payment on our main website.</li>
                            <li>On the login page, simply enter the email address you used for registration.</li>
                            <li>Click the 'Login' button.</li>
                            <li>If your email is in our database, you will be logged in automatically. Your session will be saved in your browser, so you won't need to log in again unless you clear your browser data or log out manually.</li>
                        </ol>
                    </SubSection>
                    <SubSection title="How to Set Up Your API Key">
                        <p>To use the AI features, you need a Google Gemini API Key. This platform offers two ways to get one:</p>
                        <div className="mt-4 space-y-6">
                            <div className="p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                                <h5 className="font-bold">Option 1: Use Your Own Key (Recommended)</h5>
                                <p className="text-xs mt-1">This is the best long-term solution for unlimited access. Your key is stored securely in your user profile.</p>
                                <ol className="list-decimal pl-5 space-y-1 mt-3">
                                    <li dangerouslySetInnerHTML={{ __html: 'Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">Google AI Studio</a> to generate your free API key.' }} />
                                    <li>Copy the key.</li>
                                    <li>In this application, navigate to Settings &gt; API &amp; Integrations.</li>
                                    <li>Paste your key into the 'Google Gemini API Key' field and click 'Save'.</li>
                                </ol>
                                <h6 className="font-semibold text-sm mt-4">Watch a video on how to set it up:</h6>
                                <div className="aspect-video mt-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden">
                                    <video
                                        className="w-full h-full"
                                        src="https://monoklix.com/wp-content/uploads/2025/09/Cara-Untuk-Dapatkan-API-Key.mp4"
                                        controls
                                        playsInline
                                        title="Cara Setup API Key MONOklix.com"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                                <h5 className="font-bold">Option 2: Claim a Temporary Key</h5>
                                <p className="text-xs mt-1">If you don't have your own key or if yours isn't working, you can claim a temporary one from our system.</p>
                                <ol className="list-decimal pl-5 space-y-1 mt-3">
                                    <li dangerouslySetInnerHTML={{ __html: "Click the Key icon in the top-right header." }}/>
                                    <li dangerouslySetInnerHTML={{ __html: "Click 'Auto New Key'. The system will automatically find a working key and apply it to your session." }}/>
                                    <li dangerouslySetInnerHTML={{ __html: "Alternatively, click 'Show Manual List' to see available keys and claim one yourself." }}/>
                                    <li dangerouslySetInnerHTML={{ __html: "These keys are temporary and have daily claim limits for regular users." }}/>
                                </ol>
                            </div>
                        </div>
                        <p className="mt-4">Note: The temporary key is only stored for your current session and will be lost if you close your browser tab. Your personal key (Option 1) is saved permanently.</p>
                    </SubSection>
                </Section>
                
                <Section title="Chapter 2: AI Content Idea Suite">
                    <p>This suite is designed to help you brainstorm and create written content for your marketing needs.</p>
                     <ul className="list-disc pl-5 space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Staff MONOklix:</strong> A team of specialized AI agents. Choose an agent (like a Market Researcher or Copywriter), provide your input, and get expert-level output for specific tasks.' }}/>
                        <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Content Ideas:</strong> Overcome creative blocks by entering a topic. The AI uses Google Search to find current trends and generates 5 fresh content ideas with titles and descriptions.' }}/>
                        <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Marketing Copy:</strong> Craft persuasive copy for ads, social media, or websites. Just describe your product, target audience, and desired tone.' }}/>
                        <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Product Ad Storyline:</strong> The perfect starting point for a video ad. Upload a product image, write a brief description, and the AI will generate a complete 1-scene storyboard concept.' }}/>
                    </ul>
                </Section>
                
                <Section title="Chapter 3: AI Image Suite">
                    <p>This suite contains powerful tools for creating and manipulating images.</p>
                    <div className="space-y-3 mt-4">
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"/>
                            <div>
                                <strong className="font-semibold text-green-800 dark:text-green-300">What It Can Do:</strong>
                                <ul className="list-disc pl-5 text-sm">
                                    <li>Generate new images from text (Text-to-Image).</li>
                                    <li>Edit existing images using text instructions (Image-to-Image).</li>
                                    <li>Place your product into a professional studio background.</li>
                                    <li>Create realistic model photos using your product.</li>
                                    <li>Upscale image resolution and enhance colors.</li>
                                    <li>Remove backgrounds from photos.</li>
                                </ul>
                            </div>
                        </div>
                         <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"/>
                             <div>
                                <strong className="font-semibold text-red-800 dark:text-red-300">What It Cannot Do:</strong>
                                <ul className="list-disc pl-5 text-sm">
                                    <li>Generate images with specific, readable text.</li>
                                    <li>Perfectly replicate complex logos or brand marks.</li>
                                    <li>Create photorealistic faces of well-known celebrities due to safety policies.</li>
                                    <li>Guarantee perfect hands or anatomically correct figures in every generation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <SubSection title="Understanding Safety Filters">
                        <p>All AI image and text generation is subject to Google's safety filters. Your request may be blocked if it contains content related to:</p>
                         <ul className="list-disc pl-5 space-y-2">
                            <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Hate speech, harassment, or violence.</strong>' }} />
                            <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Self-harm.</strong>' }} />
                            <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Sexually explicit material.</strong>' }} />
                            <li dangerouslySetInnerHTML={{ __html: '<strong class="font-semibold">Child safety.</strong>' }} />
                            <ol className="list-decimal pl-5 mt-1">
                                <li>If your request is blocked, the system will show an error message. The most common reason for this is an overly descriptive or sensitive prompt. Please try to:</li>
                                <li>Simplify your prompt.</li>
                                <li>Remove any words that could be misinterpreted as harmful.</li>
                                <li>If using an image, try a different one.</li>
                            </ol>
                        </ul>
                        <p>We cannot disable these safety filters as they are a core part of the Gemini API.</p>
                    </SubSection>
                </Section>

                <Section title="Chapter 4: AI Video & Voice Suite">
                    <p>Create stunning videos and professional voice-overs with ease.</p>
                    <SubSection title="Video Generation"><p>Create a video from a text prompt. You can also provide a starting image. The AI will animate the image based on your prompt. For best results, use a descriptive prompt detailing the scene and action.</p><p>This tool is perfect for creating short, dynamic clips for social media or ads.</p></SubSection>
                    <SubSection title="Video Storyboard"><p>This is a powerful 2-step workflow for creating product review videos. In Step 1, you provide product details and creative direction to generate a 4-scene storyboard script. In Step 2, the AI generates a unique image for each scene based on the script.</p><p>This is the fastest way to get a complete visual concept for your video ads.</p></SubSection>
                    <SubSection title="Video Combiner"><p>Stitch multiple video clips from your Gallery into a single video. Select the videos you want to combine in the order you want them to appear.</p><p>The processing is done entirely in your browser, so it's private and fast for short clips. (Admin/Lifetime users only)</p></SubSection>
                    <SubSection title="Voice Studio"><p>Convert any text into a professional voice-over. Write your script, choose from a variety of professional voice actors (including Bahasa Malaysia), and adjust the speed, pitch, and volume.</p><p>The output is an MP3 file you can use in any video editor.</p></SubSection>
                </Section>
                
                <Section title="Chapter 5: Social Post Studio & Webhooks">
                    <p>Streamline your content publishing with our integrated social post composer and webhook automation.</p>
                    <SubSection title="What is the Social Post Studio?">
                        <p>It's a centralized hub to prepare your social media content. You can:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li dangerouslySetInnerHTML={{ __html: "Write or generate captions using `Staff MONOklix` AI agents." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Add hashtags, a call-to-action (CTA), and a link." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Attach media: select 1 video or up to 4 images from your Gallery, or upload directly from your desktop." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Set a schedule date and time." }} />
                        </ul>
                    </SubSection>
                    <SubSection title="What is a Webhook?"><p>A webhook is a way for apps to send automated messages or information to other apps. In our case, when you click 'Send Post to Webhook', the Social Post Studio packages up all your content (text, media, schedule) and sends it to a URL you've specified.</p><p>This allows you to connect MONOklix.com to automation platforms like n8n or Zapier to automatically publish your posts to Facebook, Instagram, TikTok, etc.</p></SubSection>
                    <SubSection title="How to Set Up Your Webhook">
                        <p>First, you need to create a webhook workflow in your automation tool (e.g., n8n). This will give you a unique URL.</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>Go to Settings &gt; API &amp; Integrations.</li>
                            <li>Find the 'Personal Webhook' section.</li>
                            <li>Paste your webhook URL from n8n/Zapier into the input field.</li>
                            <li>Click 'Save'. Your webhook is now configured.</li>
                        </ol>
                    </SubSection>
                    <SubSection title="Personal vs. Trial Accounts"><p>The Social Post Studio and webhook integration are exclusive features for full (Lifetime) users.</p><p>Trial users can see the interface but cannot send posts to a webhook.</p></SubSection>
                    <SubSection title="How Data is Sent"><p>All media (images/videos) is converted to a Base64 text string and sent within a single JSON payload. Your automation workflow will need a step to convert this Base64 string back into a file before posting to social media.</p><p>This is a standard and reliable way to transfer files via webhooks.</p></SubSection>
                </Section>

                <Section title="Chapter 6: Understanding the AI Models">
                    <p>This platform uses several different Google AI models, each specialized for a specific task.</p>
                    <SubSection title="Text & Multimodal: Gemini 2.5 Flash"><p>Model Name: `gemini-2.5-flash`</p><p>This is our primary workhorse model. It's used for all text generation (like marketing copy and content ideas) and for understanding images (like in the Product Ad Storyline and Product Photo tools).</p><p>We've optimized it for speed by disabling the 'thinking' budget, which means you get your results faster.</p></SubSection>
                    <SubSection title="Video Generation: Veo Models">
                        <p>Veo is Google's flagship model for creating video from text or images.</p><p className="font-semibold">Video generation uses different models with different capabilities:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li dangerouslySetInnerHTML={{ __html: "`veo-3.0-generate-001`: The most powerful model, producing the highest quality videos. It is slightly slower." }} />
                            <li dangerouslySetInnerHTML={{ __html: "`veo-3.0-fast-generate-001`: A faster version of Veo 3, ideal for quick results." }} />
                        </ol>
                    </SubSection>
                    <SubSection title="Can I Create Videos with My Own Voice?"><p>Not directly during video generation. The built-in AI voiceover feature in the Video Storyboard tool currently supports a limited set of languages.</p><p>For custom voice-overs, we highly recommend using the 'Voice Studio' tool to generate an audio file, and then combining it with your generated video in a separate video editing application.</p></SubSection>
                    <SubSection title="Image Editing: Gemini 2.5 Flash Image"><p>Model Name: `gemini-2.5-flash-image`</p><p>This model is a multimodal expert. It's used for all tasks that involve editing or composing an image, such as placing your product in a new background, creating model photos, enhancing quality, and removing backgrounds.</p></SubSection>
                    <SubSection title="Image Generation: Imagen 4"><p>Model Name: `imagen-4.0-generate-001`</p><p>This is a specialist model used only for high-quality text-to-image generation from scratch in the 'Image Generation' tool.</p></SubSection>
                </Section>

                <Section title="Chapter 7: Prompts & Libraries">
                    <p>The Prompt Library suite is your hub for inspiration and proven prompt formulas.</p>
                    <SubSection title="How to Use the Libraries">
                        <p>The suite is divided into two main sections:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li dangerouslySetInnerHTML={{ __html: "<strong>Nano Banana Prompts:</strong> A collection of general-purpose, creative prompts for image generation and editing, sourced from an open-source community project. These are great for exploring the creative possibilities of the AI." }} />
                            <li dangerouslySetInnerHTML={{ __html: "<strong>Viral Prompts (MY):</strong> A curated list of prompts specifically designed for the Malaysian market. These are proven to generate images and concepts that resonate with local trends and aesthetics." }} />
                        </ol>
                        <p className="mt-2">In either library, you can browse the examples. When you find one you like, simply click the 'Use this Prompt' button. This will automatically copy the prompt and take you to the AI Image Generation tool with the prompt pre-filled, so you can generate it immediately or customize it further.</p>
                    </SubSection>
                </Section>
                
                <Section title="Chapter 8: Admin Features">
                    <SubSection title="Who is an Admin?">
                        <p>An admin has full access to all features, including those hidden from regular users. This role is reserved for platform managers.</p>
                        <p>You can identify if you are an admin by looking for the 'Admin' sections in the sidebar and Settings page.</p>
                    </SubSection>
                    <SubSection title="What Can Admins Do?">
                        <p>Admins have access to special tools for managing the platform:</p>
                         <ul className="list-disc pl-5 space-y-1">
                            <li dangerouslySetInnerHTML={{ __html: "`User Database (Settings > User Database)`: View, search, and update the status of all registered users. You can also export the entire user database as a JSON backup or import a JSON file to replace the existing data (use with caution!)." }}/>
                            <li dangerouslySetInnerHTML={{ __html: "`Content Admin (Settings > Content Admin)`: Edit the content that appears on the e-Tutorial home page, including the main video, platform status messages, and announcements." }}/>
                            <li dangerouslySetInnerHTML={{ __html: "`Batch Processor (AI Video & Voice > Batch Processor)`: Generate multiple videos at once by uploading a text file where each line is a prompt." }}/>
                            <li dangerouslySetInnerHTML={{ __html: "`Video Combiner (AI Video & Voice > Video Combiner)`: An experimental tool to merge multiple short videos into one." }}/>
                        </ul>
                        <p className="mt-2">These features are designed for platform maintenance and advanced batch-processing workflows.</p>
                    </SubSection>
                </Section>
                
                <Section title="Chapter 9: Gallery, History, and Logs">
                    <SubSection title="Gallery & History"><p>Every piece of content you generate—images, videos, audio, and text—is automatically saved to your device's browser storage (IndexedDB). You can access everything in the 'Gallery & History' section. From here, you can view, download, or reuse your assets. For example, you can take an image from your gallery and send it to the Video Generation tool to create an animation.</p></SubSection>
                    <SubSection title="AI API Log">
                        <ul className="list-disc pl-5 space-y-1">
                            <li dangerouslySetInnerHTML={{ __html: '`What is it?` The API Log is a detailed, technical record of every request your browser makes to the AI models. It shows the model used, the full prompt sent, the response received, and the status (Success/Error).' }} />
                            <li dangerouslySetInnerHTML={{ __html: '`Where is it?` You can find it in two places: as a tab within the `Gallery & History` page, and as part of the `API Health Check` pop-up in the header.' }} />
                            <li dangerouslySetInnerHTML={{ __html: '`Why is it useful?` It\'s an excellent tool for debugging. If a generation fails, the log will often contain a specific error message from the API that can help you understand why (e.g., safety block, invalid API key).' }} />
                        </ul>
                    </SubSection>
                    <SubSection title="Storage"><p>Because all data is stored locally in your browser, clearing your browser's cache or site data will permanently delete your gallery and log history. We do not store your generated content on our servers.</p></SubSection>
                </Section>

                <Section title="Chapter 10: Troubleshooting Common Errors">
                    <p>If you encounter an error, it's usually due to one of a few common issues. Here’s a quick guide to what they mean and how to solve them.</p>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="text-xs text-neutral-700 uppercase bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 w-1/6">Error Code</th>
                                    <th scope="col" className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 w-2/5">Problem & Main Cause</th>
                                    <th scope="col" className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 w-2/5">Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-800">
                                    <td className="px-4 py-4 font-mono border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "`400 Bad Request` or `Invalid Request`" }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Problem:</strong> The AI model rejected your prompt or image.<br/><br/><strong>Cause:</strong> This is almost always due to Google's safety filters blocking the content. Your prompt might contain sensitive words, or your uploaded image may have been flagged." }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Solution:</strong><br/>1. Rephrase your prompt to be more neutral.<br/>2. Avoid words related to violence, hate speech, or sexually explicit topics.<br/>3. Try a different reference image." }}></td>
                                </tr>
                                <tr className="border-b dark:border-neutral-800">
                                    <td className="px-4 py-4 font-mono border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "`403 Permission Denied` or `API Key not valid`" }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Problem:</strong> Your API key is not working.<br/><br/><strong>Cause:</strong> Your key might be incorrect, expired, or lack the necessary permissions in your Google Cloud project." }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Solution:</strong><br/>1. Verify your key is pasted correctly in Settings.<br/>2. Generate a new key from Google AI Studio.<br/>3. As a quick fix, claim a temporary key from the Key icon in the header." }}></td>
                                </tr>
                                <tr className="border-b dark:border-neutral-800">
                                    <td className="px-4 py-4 font-mono border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "`429 Resource Exhausted`" }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Problem:</strong> You've made too many requests too quickly.<br/><br/><strong>Cause:</strong> The free tier of the Gemini API has a rate limit (e.g., requests per minute)." }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Solution:</strong><br/>1. Wait for 1-2 minutes before trying again.<br/>2. If using the Batch Processor, consider adding a small delay between requests." }}></td>
                                </tr>
                                <tr className="border-b dark:border-neutral-800">
                                    <td className="px-4 py-4 font-mono border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "`500 Internal Server Error`" }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Problem:</strong> There was an error on Google's end.<br/><br/><strong>Cause:</strong> This is a temporary issue with the API service itself." }}></td>
                                    <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top" dangerouslySetInnerHTML={{ __html: "<strong>Solution:</strong><br/>1. This is usually temporary. Wait for a few minutes and try your request again." }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="Chapter 11: Billing and Quotas">
                    <p>This platform is designed to be a 'Bring Your Own API Key' (BYOK) service. This means you are responsible for the costs associated with your usage of the Google Gemini API.</p>
                    <p>Here's a breakdown of how billing works and how to manage it.</p>
                    
                    <SubSection title="The Free Tier">
                        <p>Google generously provides a free tier for the Gemini API, which is often sufficient for many users. The key limits are:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li dangerouslySetInnerHTML={{ __html: "<strong>Gemini 2.5 Flash:</strong> Free for up to 2 million tokens per day." }} />
                            <li dangerouslySetInnerHTML={{ __html: "<strong>Video Generation (Veo):</strong> Currently in a free public preview, but this may change. Quotas are subject to Google's policies." }} />
                            <li dangerouslySetInnerHTML={{ __html: "<strong>Image Generation (Imagen):</strong> Free for up to 1,000 images per project per day." }} />
                        </ul>
                    </SubSection>

                    <SubSection title="How to Enable Billing">
                        <ul className="list-disc pl-5 space-y-2">
                            <li dangerouslySetInnerHTML={{ __html: "To go beyond the free tier and ensure uninterrupted service, you must enable billing on your Google Cloud project." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Go to your <code class='text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded'>Google Cloud Console</code>." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Select the project associated with your API key." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Navigate to <code class='text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded'>Billing</code> and link a billing account." }} />
                            <li dangerouslySetInnerHTML={{ __html: "Make sure the <code class='text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded'>Vertex AI API</code> is enabled in your project." }} />
                        </ul>
                    </SubSection>

                    <SubSection title="Estimated Costs (Pay-as-you-go)">
                        <p>Below are the estimated costs if you exceed the free tier. Prices are set by Google and are subject to change.</p>
                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead className="text-xs text-neutral-700 uppercase bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 border border-neutral-300 dark:border-neutral-700">Category</th>
                                        <th scope="col" className="px-4 py-3 border border-neutral-300 dark:border-neutral-700">Model</th>
                                        <th scope="col" className="px-4 py-3 border border-neutral-300 dark:border-neutral-700">Cost (USD)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-neutral-800">
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">Text</td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top"><code className="text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded">gemini-2.5-flash</code></td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">$0.000125 per 1K characters (input), $0.000375 per 1K characters (output)</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-800">
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">Image Generation</td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top"><code className="text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded">imagen-4.0-generate-001</code></td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">$0.020 per image</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-800">
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">Image Editing</td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top"><code className="text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded">gemini-2.5-flash-image</code></td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">$0.0025 per image</td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-800">
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">Video Generation</td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top"><code className="text-sm font-mono bg-neutral-200 dark:bg-neutral-700 p-1 rounded">veo-*</code></td>
                                        <td className="px-4 py-4 border border-neutral-300 dark:border-neutral-700 align-top">Currently in free preview. Pricing to be announced by Google.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </SubSection>
                </Section>
            </div>
        </div>
    );
};

// FIX: Changed to a named export to resolve the "no default export" error.
export { GetStartedView };