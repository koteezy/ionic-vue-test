const commands = [
    {e: '🦄', k: 'unicorn'},
    {e: '🍕', k: 'pizza'},
    {e: '🍺', k: 'beer'},
    {e: '💩', k: 'poo'},
    {e: '✨', k: 'magic'},
];
/* eslint-disable no-console */
commands.forEach( ( {k, e} ) => window.console[ k ] = ( ...args ) => console.warn( e, ...args ) );
/* eslint-enable no-console */