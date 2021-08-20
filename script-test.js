import { exec } from 'shelljs';

console.log('Script test 2');

exec('git diff --name-only branch-scripts-testes..main');
