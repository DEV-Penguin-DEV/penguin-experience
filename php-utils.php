// Код для логирования в PHP
$logFilePath = __DIR__ . '/postData.log'; // Путь к файлу с логами
// $postData['NewDealerForm']['type'] то что нужно записать в лог
file_put_contents($logFilePath, date('Y-m-d H:i:s') . ' ' . print_r($postData['NewDealerForm']['type'], true) . PHP_EOL, FILE_APPEND);

