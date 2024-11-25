import React from "react";
import {BlockButton} from '../block/blockButton';

const ComponentsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-2xl font-bold">Страница называется ComponentsPage.jsx</h1>
            <p className="text-lg">Маршрут у этой страницы /components </p>
            <BlockButton />
        </div>
    );
}

export default ComponentsPage;