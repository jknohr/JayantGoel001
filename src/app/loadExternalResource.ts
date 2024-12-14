// Define custom error type for resource loading failures
interface ResourceLoadError extends Error {
    type: 'resource-load-error';
    url: string;
}

// Helper function to create consistent error objects
function createResourceLoadError(url: string, message: string): ResourceLoadError {
    const error = new Error(message) as ResourceLoadError;
    error.type = 'resource-load-error';
    error.url = url;
    return error;
}

// Main export function to load external resources (CSS or JS)
export function loadExternalResource(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            // Handle CSS files
            if (url.endsWith('.css')) {
                const linkTag = document.createElement('link');
                linkTag.rel = 'stylesheet';
                linkTag.href = url;
                
                linkTag.onerror = () => {
                    reject(createResourceLoadError(url, `Failed to load stylesheet: ${url}`));
                };
                
                linkTag.onload = () => resolve(url);
                document.head.appendChild(linkTag);
            } 
            // Handle JS files
            else {
                const scriptTag = document.createElement('script');
                scriptTag.src = url;
                scriptTag.defer = true;
                
                scriptTag.onerror = () => {
                    reject(createResourceLoadError(url, `Failed to load script: ${url}`));
                };
                
                scriptTag.onload = () => resolve(url);
                document.body.appendChild(scriptTag);
            }
        } catch (error) {
            reject(createResourceLoadError(url, 
                error instanceof Error ? error.message : 'Unknown error occurred'));
        }
    });
}