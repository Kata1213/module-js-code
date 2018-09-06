
define('renderTemplate', ['printToConsole'] ,(printToConsole) => {
    const renderTemplate = (template, model) =>
        printToConsole(Object.keys(model)
            .reduce((acc, key) => acc.replace('${' + key + '}', model[key]), template));
    return renderTemplate;
});

