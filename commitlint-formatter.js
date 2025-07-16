import chalk from 'chalk';
import format from '@commitlint/format';

export default function (report) {
  console.log('Report structure:', JSON.stringify(report, null, 2));

  const output = format(report, { color: true });
  console.log('rep', report.errorCount);
  if (report.errorCount || report.warningCount) {
    console.log(
      chalk.red(
        '\n❌ Коммит не прошёл проверку. Примеры допустимых сообщений:\n'
      )
    );
    console.log(chalk.green('  feat: добавил форму авторизации'));
    console.log(chalk.green('  fix: исправил баг с прокруткой'));
    console.log(chalk.green('  chore: обновил зависимости\n'));
  }

  console.log(output);
}
