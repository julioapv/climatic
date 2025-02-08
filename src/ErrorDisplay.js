export const ErrorDisplay = () => {
    const errorContainer = document.createElement("div")
    const classes = "bg-rose-900 rounded-lg p-10".split(" ")
    errorContainer.classList.add(...classes)

    errorContainer.innerHTML = `
    <p class="font-bold text-3xl mb-4">Something happened :(</p>
    <p class="text-xl">Please make sure of the following:</p>
    <ul class="list-disc mb-4">
        <li>Check the spelling of the place you want to search</li>
        <li>Don't include numbers or special characters</li>
        <li>Check your connection to the internet</li>
    </ul>
    <p>If nothing of the aboved work please try again later or contact  <a href="https://github.com/julioapv" target="_blank" class="font-bold">support</a>  to get help</p>
    `
    return errorContainer;
}
