export const LoadingScreen = () => {
    const container = document.createElement("div");
    const classes = "flex items-center justify-center mx-auto w-1/2 h-30 bg-big-stone rounded-2xl".split(" ");
    container.classList.add(...classes);
    
    container.innerHTML = `
    <div class="flex items-center justify-center rounded-lg">
        <p class="text-3xl font-bold italic">Loading data, please be patient...</p>
    </div>
    ` 
    return container;
}