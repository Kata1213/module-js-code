import printer from "./printToConsole";

const renderTemplate = (template, model) =>
  printer(Object.keys(model)
    .reduce((acc, key) => acc.replace('${' + key + '}', model[key]), template));



export default renderTemplate;