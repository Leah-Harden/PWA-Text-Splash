const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    // Show the installation button
    butInstall.style.display = 'block';

    butInstall.addEventListener('click', () => {
        // Show the installation prompt
        event.prompt();

        // Handle the user's choice
        deferredPrompt.userChoice.then((choiceResult) => {
            // Handle the choice result
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the installation');
            } else {
                console.log('User dismissed the installation');
            }
            // Hide the installation button
            butInstall.style.display = 'none';
        })
    })
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (e) => {

    if (e) {
        try {
            // Show the installation prompt
            e.prompt();

            // Wait for the user's choice
            const choiceResult = await e.userChoice;

            // Handle the user's choice
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the installation');
            } else {
                console.log('User dismissed the installation');
            }

            // Reset the deferred prompt
            e = null;
        } catch (error) {
            console.error('Error occurred while showing the installation prompt:', error);
        }
    } else {
        console.log('Deferred prompt is not available');
    }
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault()
    // Handle the app installation event
    console.log('App installed');
});
