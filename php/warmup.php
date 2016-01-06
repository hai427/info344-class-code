<?php
$random = rand(1, 100);
echo "your new random value is $random\n";

$months = cal_info(0);
$months = $months[
	'months'
];

sort($months);

foreach ($months as $m) {
	echo $m . "\n";
}
?>
