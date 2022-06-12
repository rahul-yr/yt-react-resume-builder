export function GenerateYears() {
  var i = new Date().getFullYear();
  var j = i - 60;

  // iterate through years and add to option tag
  var options = [];
  for (var year = i; year > j; year--) {
    options.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }
  return options;
}

export function GenerateMonths() {
  // 3 letters months  list
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var options = [];
  for (var i = 0; i < months.length; i++) {
    options.push(
      <option key={i} value={months[i]}>
        {months[i]}
      </option>
    );
  }
  return options;
}
