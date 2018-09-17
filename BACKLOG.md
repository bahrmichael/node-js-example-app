- [x] integration testing framework aussuchen
- [x] node projekt inkl. package.json aufsetzen
- [x] leeren test bauen sodass `npm test` durchlaeuft
- [x] `travis.yml` in `.travis.yml` umbennen und pruefen dass der build von [travis](https://travis-ci.org/bahrmichael/node-js-example-app) richtig ausgefuehrt wird
- [x] integration tests schreiben der prueft dass eine GET schnittstelle einen jedes mal um eins erhoehten counter zurueckgibt -> die tests sollen sich komplett mit mit dem neuen kommando `yarn e2e` ausfuehren lassen. man soll vorher nicht den server von hand starten muessen (das starten und beenden des servers soll in `yarn e2e` eingebaut werden).

	- [x] Testaufruf von `travis.yml` in `package.json` auslagern.
	- [x] Server automatisch beenden/starten. (Bash-Script)
	- [x] ~automatische Portzuweisung und Kommunikation dieser einbauen.~
	- [x] Countererhöhung testen

```
# yarn test

yarn run v1.7.0
$ jest --coverage --config src/test/jest.conf.js
 FAIL  src/test/server.spec.js
  ● Test GET /api for correct counting › Responds with JSON

    connect ECONNREFUSED 127.0.0.1:1337



 PASS  src/test/app.spec.js
-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |        0 |        0 |        0 |        0 |                   |
 app.js    |        0 |      100 |        0 |        0 |         1,2,5,6,9 |
 server.js |        0 |        0 |        0 |        0 |... 22,25,27,28,31 |
-----------|----------|----------|----------|----------|-------------------|

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        2.584s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

- [x] Counter Logik
	- [x] in dedizierte counter.js Klasse extrahieren (OOP)
	- [x] unit tests
	- [x] die neue counter klasse in die server.js injecten (neue objekt-instanz erzeugen die dann den counterValue haelt)
- [ ] GET schnittstelle inkl. unit-tests implementieren
	- [x] GET schnittstelle implementieren
	- [ ] Unit Tests zu `api.js`
	- [ ] Unit Tests zu `server.js`
	- [ ] Integrationstests erweitern. (Andere HTTP-Fehlercodes testen)
