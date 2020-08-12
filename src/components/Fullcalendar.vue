<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGrid from "@fullcalendar/timegrid"

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGrid],
        initialView: "timeGridWeek",
        weekends: false,
        minTime: "05:00:00",
        maxTime: "19:00:00",
        nowIndicator: true,
        allDaySlot: false,
      },
    };
  },
};
</script>
<template>
  <FullCalendar id="cal" :options="calendarOptions" />
</template>
<style scoped>
#cal {
  margin: auto;
  width: 50%;
}
</style>