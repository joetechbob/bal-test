var bal = require('..\\bal\\');
var baleth = require('..\\bal-eth\\');

// Login methods...Could be as simple as entering a PK on the cmd line, reading from a smart card, etc.
bal.loginMethods.add('cmdLinePrompt', () => "privatekey");

bal.connections.add('eth1', {
    type: 'eth',
    settings: {
        'url': '...',
        'locaterAddress': '...'
    }
});

// Creae a client instance, providing a connection and a 'login' with a retention policy.
var client = bal.createClient('eth1', bal.login('cmdLinePrompt', {retentionInSeconds: 0}));

var personEntity = client.entity('person');

entity.readList();

entity.read('<identifier>');
entity.find('...');