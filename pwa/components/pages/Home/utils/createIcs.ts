
const enc = encodeURIComponent;
const encLines = (s: string) => s.replace(/\n/g, "\\n");

const zoomLink = 'https://zoom.us/j/6481021976?pwd=cmxiUE5WT1YzVGpOQUw4S256OWNnQT09';
export const nextMeetupDate = ['Wed', '13', 'Oct', '7.00pm'];
export const nextMeetupTitle = "Manal al-Sharif: “We don’t sell your data” and 5 Other Hilarious Privacy Lies Big Tech Told Us";

export const nextMeetupLink = 'https://www.meetup.com/humane-technology-australia/events/fqgchsyccnbrb/';
export const nextMeetupDateStart = '20211013T090000Z';
export const nextMeetupDateEnd = '20211013T100000Z';
export const nextMeetupDetails = `Join us for this month's HTA discussion meeting

Topic:
${nextMeetupTitle}

Join Zoom Meeting
${zoomLink}

Meeting ID: 648 102 1976
Passcode: hta1275`;
export const nextMeetupGCalLink = `http://www.google.com/calendar/event?location=${enc(zoomLink)}&action=TEMPLATE&sprop=name%3AHumane+Technology+Australia&details=${enc(nextMeetupDetails)}&text=${enc(`HTA meeting: ${nextMeetupTitle}`)}&dates=${nextMeetupDateStart}%2F${nextMeetupDateEnd}`;

var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Humane Technology Australia//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:noreply@humanetechnology.com.au\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Sean:MAILTO::sean@humanetechnology.com.au\nDTSTART:"
  + nextMeetupDateStart +"\nDTEND:" + nextMeetupDateEnd +"\nLOCATION:" + zoomLink + "\nSUMMARY:HTA meeting - "+nextMeetupTitle+"\nDESCRIPTION:"+encLines(nextMeetupDetails)+"\nEND:VEVENT\nEND:VCALENDAR";

export default function openIcs() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsMSG));
  element.setAttribute('download', 'hta-meeting-invite.ics');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
