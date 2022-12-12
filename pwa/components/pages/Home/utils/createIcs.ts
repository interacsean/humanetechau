// --- update these:

export const nextMeetupDate = ['Wed', '14', 'December', '7.00pm AEST / 6.00pm AEDT'];
export const nextMeetupLink = 'https://www.meetup.com/humane-technology-australia/events/289943804/';
export const nextMeetupDateStart = '20221214T080000Z';
export const nextMeetupDateEnd = '20221214T090000Z';
export const nextMeetupTitle = "Content moderation and impact on online abuse";
export const nextMeetupDesc = false; //"Joël Kalmanowicz (Atlassian, ex-Google) will talk us through his draft Framework for Humane Technology"

// ----

const enc = encodeURIComponent;
const encLines = (s: string) => s.replace(/\n/g, "\\n");

const joinLink = 'meet.google.com/goi-cvnw-wdk';
//'https://zoom.us/j/6481021976?pwd=cmxiUE5WT1YzVGpOQUw4S256OWNnQT09';
export const nextMeetupDetails = `Join us for this month's HTA discussion meeting

Topic:
${nextMeetupTitle}

Join Google Meet:
${joinLink}`;
// Meeting ID: 648 102 1976
// Passcode: hta1275`;

export const nextMeetupGCalLink = `http://www.google.com/calendar/event?location=${enc(joinLink)}&action=TEMPLATE&sprop=name%3AHumane+Technology+Australia&details=${enc(nextMeetupDetails)}&text=${enc(`HTA meeting: ${nextMeetupTitle}`)}&dates=${nextMeetupDateStart}%2F${nextMeetupDateEnd}`;

var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Humane Technology Australia//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:noreply@humanetechnology.com.au\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Sean:MAILTO::sean@humanetechnology.com.au\nDTSTART:"
  + nextMeetupDateStart +"\nDTEND:" + nextMeetupDateEnd +"\nLOCATION:" + joinLink + "\nSUMMARY:HTA meeting - "+nextMeetupTitle+"\nDESCRIPTION:"+encLines(nextMeetupDetails)+"\nEND:VEVENT\nEND:VCALENDAR";

export default function openIcs() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsMSG));
  element.setAttribute('download', 'hta-meeting-invite.ics');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
