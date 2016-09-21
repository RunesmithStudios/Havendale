function altBrackets($interpolateProvider)
{
    $interpolateProvider
        .startSymbol('{[')
        .endSymbol(']}')
}

altBrackets.$inject = ['$interpolateProvider']

export { altBrackets }
