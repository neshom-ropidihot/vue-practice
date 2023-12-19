<template>
    <div class="box">
        <router-link :to="{ name: 'event-show', params: { id: '1' } }">
        
            <span>@{{event.time}} on {{ event.date }}</span>
            <h1>{{ event.title}}</h1>
            <span> {{ event.attendees.length }} attendees </span>
        </router-link>
    </div>
</template>

<script>
 
export default ({
    data() {
        return {

            event: {
                id: 1,
                title: 'park',
                date : 'aug 19, 2023',
                time: '10:12',
                attendees : [
                    {id : 'asd123', name: 'adam'},
                    {id : 'zxc456', name: 'alex'},
                ]
            }
        }
    },
})
</script>

<style scoped>
h1 {
    color: green;
}
.box {
    border: 1px solid red;
}
</style>
