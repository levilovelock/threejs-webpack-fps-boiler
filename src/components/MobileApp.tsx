import React, { useEffect } from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import Canvas from '../canvas/Canvas';
import OrbitControlsInputController from '../canvas/OrbitControlsInputController';

interface AppProps {
    canvas: Canvas;
}

export default function MobileApp(props: AppProps) {
    const { canvas } = props;

    useEffect(() => {
        const controller = new OrbitControlsInputController(canvas);;
        canvas.animate(() => controller.handleControl());
    }, [canvas]);

    return <ThreeCanvas canvas={canvas} />
};