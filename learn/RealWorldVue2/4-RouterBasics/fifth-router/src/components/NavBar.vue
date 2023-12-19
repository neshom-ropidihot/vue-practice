<template>
    <div>
         <router-link to="/">Real World Events</router-link>

         <nav>
             <router-link :to="{ name: 'event-list' }">List</router-link>
             <router-link :to="{ name: 'event-create' }">create</router-link>
        </nav>
    </div>
</template>