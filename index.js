const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><body></body>');
const $ = require('jquery')(dom.window);

let assignments = [
  { "title": "Tech Forum One - Reflection Paper", "dueDate": "No due date", "status": "No Submission", "score": "-/0 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/45852" },
  { "title": "Quiz One - Test your HTML/CSS/JS Prowess", "dueDate": "No due date", "status": "No Submission", "score": "-/0 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/45838" },
  { "title": "CSS, advanced (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48378" },
  { "title": "CSS, basic (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48377" },
  { "title": "HTML, advanced (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48376" },
  { "title": "HTML, basic (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48374" },
  { "title": "JavaScript - Objects, Scopes and Closures (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48379" },
  { "title": "JavaScript - Warm up (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48381" },
  { "title": "JavaScript - Web jQuery (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48375" },
  { "title": "JavaScript - Web scraping (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48382" },
  { "title": "Regular expression (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48373" },
  { "title": "Responsive design (Front-End Web Development) [synced from intranet]", "dueDate": "No due date", "status": "No Submission", "score": "-/100 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/48380" },
  { "title": "Regex Onboarding Hackathon", "dueDate": "Due Sep 11 at 11:59pm", "status": "No Submission", "score": "-/25 pts", "link": "https://alueducation.instructure.com/courses/3130/assignments/46805" }
];

function cleanTitle(assignment) {
  return assignment.title
    .replace(' (Front-End Web Development)', '')
    .replace(' [synced from intranet]', '');
}

const $list = $('<div id="assignments"></div>');
assignments.forEach(function (assignment) {
  const $item = $('<div class="assignment"></div>');
  $item.attr('data-title', cleanTitle(assignment));
  $item.attr('data-status', assignment.status);
  $item.attr('data-due', assignment.dueDate);
  if (assignment.link) {
    $item.attr('data-link', assignment.link);
  }
  $list.append($item);
});
$(dom.window.document.body).append($list);

$('.assignment', dom.window.document).each(function () {
  const $item = $(this);
  console.log('Title:    ' + $item.attr('data-title'));
  console.log('Status:   ' + $item.attr('data-status'));
  console.log('Due Date: ' + $item.attr('data-due'));
  const link = $item.attr('data-link');
  if (link) {
    console.log('Link:     ' + link);
  }
  console.log('---');
});
