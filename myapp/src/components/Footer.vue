<template>
    <div class="app">
        <div class="grid">
            <vs-col class="backgrounds" style="height:300px;top:120px;">
                <div class="grid">
                    <vs-row style="bottom:100px;padding-left:20px;">
                        <vs-col w="6">
                            <vs-card id="foot-card">
                                <template #title>
                                    <h3 class="text-contents" style="font-size:30px;margin-bottom:20px;">Send us Email!
                                    </h3>
                                </template>
                                <template #text>
                                    <div class="center content-inputs" id="foot-input">
                                        <div class="grid">
                                            <vs-row>
                                                <vs-col w="5">
                                                    <vs-input id="name" dark v-model="firstname"
                                                        placeholder="First Name" />
                                                </vs-col>
                                                <vs-col w="5">
                                                    <vs-input id="name" dark v-model="firstname"
                                                        placeholder="Last Name" />
                                                </vs-col>
                                                <vs-col w="12">
                                                    <vs-input id="email" dark v-model="firstname"
                                                        placeholder="E-Mail" />
                                                </vs-col>
                                                <vs-col w="12">
                                                    <textarea
                                                        class="vs-input vs-input-content vs-input-content--has-color"
                                                        id="input-massage" name="" cols="10" rows="5"
                                                        style="float:left;border-radius:20px;"></textarea>
                                                </vs-col>
                                                <vs-col w="12">
                                                    <vs-button style="float:right;margin-right:5px;"
                                                        color="rgb(59,222,200)" gradient :active="active == 6"
                                                        @click="active = 6">
                                                        Send Your Massage
                                                    </vs-button>
                                                </vs-col>
                                            </vs-row>
                                        </div>
                                    </div>
                                </template>
                                <template #interactions>
                                    <vs-button danger icon>
                                        <i class='bx bx-heart'></i>
                                    </vs-button>
                                    <vs-button class="btn-chat" shadow primary>
                                        <i class='bx bx-chat'></i>
                                        <span class="span">
                                            54
                                        </span>
                                    </vs-button>
                                </template>
                            </vs-card>
                        </vs-col>
                        <vs-col w="6">
                            <div class="grid" style="text-align:start;color:white;">
                                <vs-row>
                                    <vs-col w="6" style="top:64.5px;">
                                        <ul style="color:black;">
                                            <h3>Our Social Media</h3>
                                        </ul>
                                        <ul><a class="link-text" style="color:white;" href="">Instagram</a></ul>
                                        <ul><a class="link-text" style="color:white;" href="">Facebook</a></ul>
                                    </vs-col>
                                    <vs-col w="6" style="top:64.5px;">
                                        <ul style="color:black;">
                                            <h3>Connect</h3>
                                        </ul>
                                        <ul><a class="link-text" style="color:white;" href="">Teams</a></ul>
                                        <ul><a class="link-text" style="color:white;" href="">Github</a></ul>
                                        <ul><a class="link-text" style="color:white;" href="">Forum</a></ul>
                                    </vs-col>
                                    <vs-col w="12" style="margin-top:100px;margin-right:30px;text-align:right;">
                                        Made with <span class="material-icons" style="color:red;">favorite</span> by <a
                                            class="link-text bolders" style="color:white;" href="">Ricko Tiaka</a>
                                    </vs-col>
                                </vs-row>
                            </div>
                        </vs-col>
                    </vs-row>
                </div>
            </vs-col>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
    }
</script>