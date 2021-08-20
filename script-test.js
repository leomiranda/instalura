import { exec } from 'shelljs';

exec('git diff --name-only branch-scripts-testes..main');
