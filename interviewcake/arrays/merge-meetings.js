/**Your company built an in-house calendar tool called HiCal. 
 * You want to add a feature to see the times in a day when everyone is available.
 * To do this, you’ll need to know when any team is having a meeting. In HiCal, 
 * a meeting is stored as objects ↴ with integer properties startTime and endTime.
 * These integers represent the number of 30-minute blocks past 9:00am. 
 * Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
 * [ { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }]

  result:[{ startTime: 0, endTime: 1},
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },]

  Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
  
  */

/**Here's a formal algorithm:

1. We treat the meeting with earlier start time as "first," and the other as "second."
2. If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times.
3. Else, we leave them separate. */
function mergeRanges(meetings) {
  //sort meetings by startTime
  meetings.sort((a, b) => a[0] - b[0]);
  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    const currentMeeting = meetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (lastMergedMeeting.endTime < currentMeeting.startTime) {
      mergedMeetings.push(currentMeeting);
    } else if (lastMergedMeeting.endTime < currentMeeting.endTime) {
      mergedMeetings[mergedMeetings.length - 1].endTime =
        currentMeeting.endTime;
    }
  }
  return mergedMeetings;
}

console.log(
  mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 5 },
    { startTime: 6, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 }
  ])
);

// Tests

let desc = 'meetings overlap';
let actual = mergeRanges([
  { startTime: 1, endTime: 3 },
  { startTime: 2, endTime: 4 }
]);
let expected = [{ startTime: 1, endTime: 4 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
actual = mergeRanges([
  { startTime: 5, endTime: 6 },
  { startTime: 6, endTime: 8 }
]);
expected = [{ startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
actual = mergeRanges([
  { startTime: 1, endTime: 8 },
  { startTime: 2, endTime: 5 }
]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
actual = mergeRanges([
  { startTime: 1, endTime: 3 },
  { startTime: 4, endTime: 8 }
]);
expected = [
  { startTime: 1, endTime: 3 },
  { startTime: 4, endTime: 8 }
];
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
actual = mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 }
]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
actual = mergeRanges([
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 }
]);
expected = [
  { startTime: 1, endTime: 4 },
  { startTime: 5, endTime: 8 }
];
assertArrayEquals(actual, expected, desc);

desc = 'oneLongMeetingContainsSmallerMeetings';
actual = mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }
]);
expected = [{ startTime: 1, endTime: 12 }];
assertArrayEquals(actual, expected, desc);

desc = 'sample input';
actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
]);
expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 }
];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  // Sort the keys in each meeting to avoid
  // failing based on differences in key order.
  orderedA = a.map(function (meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  orderedB = b.map(function (meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  const arrayA = JSON.stringify(orderedA);
  const arrayB = JSON.stringify(orderedB);
  if (arrayA !== arrayB) {
    console.log(
      `${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`
    );
  } else {
    console.log(`${desc} ... PASS`);
  }
}
