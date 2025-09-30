export const durations = [
  {time: '1-week', days: 7, rate: 10 },
  {time: "1-Month", days: 30, rate: 10 },
  {time: "3-Months", days: 90, rate: 12 },
  {time: "6-Months", days: 180, rate: 13 },
  {time: "12-Months", days: 365, rate: 15 },
  {time: "18-Months", days: 547, rate: 16 }
];

export function generateDurationsHTML( time, days, rate) {
  const html =  `
      <div>
        <input 
          class = "duration"
          data-rate = "${rate}"  
          data-days = "${days}"
          type="radio" 
          name="duration" 
          id="${time}" 
          value="${time}" 
          >
        <label for="${time}">
          ${time} ${rate}% p.a.
        </label>
      </div>
  `;

  return html;
}

