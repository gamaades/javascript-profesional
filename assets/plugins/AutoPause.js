class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }

    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
    }

    handlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;
        // console.log(entry.boundingClientRect);// La propiedad IntersectionObserverEntryde solo lectura de la interfaz boundingClientRectdevuelve un DOMRectReadOnlyque, en esencia, describe un rectángulo que describe el rectángulo más pequeño que contiene todo el elemento de destino.
        // console.log(entry.intersectionRect);// La propiedad IntersectionObserverEntryde solo lectura de la interfaz intersectionRectes un DOMRectReadOnlyobjeto que describe el rectángulo más pequeño que contiene la parte completa del elemento de destino que está actualmente visible dentro de la raíz de la intersección.
        // console.log(entry.rootBounds); // La propiedad IntersectionObserverEntryde solo lectura de la interfaz corresponde al rectángulo de intersección de la raíz, compensado por el si se especifica uno. rootBoundsDOMRectReadOnlytargetIntersectionObserver.rootMargin
        // console.log(entry.target); // La propiedad IntersectionObserverEntryde solo lectura de la interfaz targetindica qué objetivo Elementha cambiado su cantidad de intersección con la raíz de la intersección.
        // console.log(entry.time); // obtiene el timepo que hemos estado en la página

        if (isVisible) {
            this.player.play();    
        } else {
            this.player.pause();    
        }
    }

    handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();    
        } else {
            this.player.pause();    
        }
    }
}

export default AutoPause;