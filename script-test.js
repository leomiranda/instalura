import { exec } from 'shelljs';

console.log('Script test');

exec('git diff --name-only branch-scripts-testes..main');
