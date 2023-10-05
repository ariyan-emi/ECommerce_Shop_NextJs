declare module 'eyeComponentTypes' {
    interface Input {
        mouseX: {
            start: number;
            end: number;
            current: number;
            range?: number;
            fraction?: number;
        };
        mouseY: {
            start: number;
            end: number;
            current: number;
            range?: number;
            fraction?: number;
        };
    }

    interface Output {
        x: {
            start: number;
            end: number;
            current: number;
            range?: number;
        };
        y: {
            start: number;
            end: number;
            current: number;
            range?: number;
        };
    }
}
