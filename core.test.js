import createCore from "./core.js";

// criando um mock para database e webserver (configurations) para teste
// no intuito de respeitar o contrato de implementação do core
function createMock() {
    function start() {
        console.log(['mock ...'])
    }

    function stop() {
        console.log(['mock ...'])
    }

    return {
        start,
        stop
    }
}

describe('Core quando importado', () => {
    test('deve ter o método #start e #stop', () => {
        const databaseMock = createMock();
        const webserverMock = createMock();

        // agora, o que não precisamos testar de fato
        // usamos o mock, que serão as configurations
        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });

        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    });
});

describe('Core quando importado', () => {
    test('não deve retornar erros', () => {
        const databaseMock = createMock();
        const webserverMock = createMock();

        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });

        expect(() => {
            core.start();
        }).not.toThrow();
    });
});