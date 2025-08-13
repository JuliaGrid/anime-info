import path from 'path';

const colors = {
  reset: '\x1b[0m',
  gray: '\x1B[90m',
  red: '\x1B[91m',
  green: '\x1b[32m',
};

export default class CustomFailReporter {
  onRunComplete(_, results) {
    if (
      results.numFailedTests === 0 &&
      results.numRuntimeErrorTestSuites === 0
    ) {
      console.log('\n✅ Все тесты прошли успешно!');
      return;
    }

    console.log('\n❌ Упавшие тесты:\n');

    results.testResults.forEach((testFile) => {
      const relativePath = path.relative(process.cwd(), testFile.testFilePath);

      // 1️⃣ Ошибки выполнения/компиляции (TS, SyntaxError и т.д.)
      if (testFile.testExecError) {
        const messageLine = testFile.testExecError.message
          ? testFile.testExecError.message.split('\n')[0].split('-')[1]
          : 'Неизвестная ошибка выполнения';
        console.log(`📄 ${colors.gray}${relativePath}${colors.reset}`);
        console.log(`   • Ошибка запуска файла`);
        console.log(`     ↳ ${messageLine}\n`);
      }

      // 2️⃣ Обычные упавшие тесты
      const failedTests = testFile.testResults.filter(
        (t) => t.status === 'failed'
      );
      failedTests.forEach((test) => {
        const messageLine = test.failureMessages[0]
          ? test.failureMessages[0].split('\n')[0]
          : 'Ошибка без сообщения';
        const splitedError = messageLine.split(':');
        const wordError =
          splitedError[0][0].toLowerCase() + splitedError[0].slice(1);
        const redWord = `${colors.red}${wordError}${colors.reset}`;
        const errorText = splitedError[1];
        console.log(`📄 ${colors.gray}${relativePath}${colors.reset}`);
        console.log(`   • ${test.fullName}`);
        console.log(`     ↳  ${redWord}:${errorText}\n`);
      });
    });
  }
}
