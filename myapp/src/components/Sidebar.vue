<template>
    <div class="hidden">
        <vs-sidebar absolute hover-expand reduce v-model="active" open>
            <template #logo>
                Logo
            </template>
            <vs-sidebar-item to="/dashboard" id="dashboard">
                <template #icon>
                    <span class="material-icons">dashboard</span>
                </template>
                Dashboard
            </vs-sidebar-item>
            <vs-sidebar-group>
                <template #header>
                    <vs-sidebar-item arrow>
                        <template #icon>
                            <span class="material-icons">account_circle</span>
                        </template>
                        Account
                    </vs-sidebar-item>
                </template>

                <vs-sidebar-item id="profile">
                    <template #icon>
                        <span class="material-icons">badge</span>
                    </template>
                    Profile
                </vs-sidebar-item>
                <vs-sidebar-item to="/dashboard/feed" id="myFeed">
                    <template #icon>
                        <span class="material-icons">feed</span>
                    </template>
                    My Feed
                </vs-sidebar-item>
            </vs-sidebar-group>
            <vs-sidebar-item id="administrator">
                <template #icon>
                    <span class="material-icons">supervisor_account</span>
                </template>
                Administrator
            </vs-sidebar-item>
            <vs-sidebar-group>
                <template #header>
                    <vs-sidebar-item arrow>
                        <template #icon>
                            <span class="material-icons">settings</span>
                        </template>
                        Settings
                    </vs-sidebar-item>
                </template>

                <vs-sidebar-item id="accountSettings">
                    <template #icon>
                        <span class="material-icons">manage_accounts</span>
                    </template>
                    Account
                </vs-sidebar-item>
                <vs-sidebar-item id="advancedSettings">
                    <template #icon>
                        <span class="material-icons">tune</span>
                    </template>
                    Advanced
                </vs-sidebar-item>
            </vs-sidebar-group>
        </vs-sidebar>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                active: 'dashboard',
            }
        }
    }
</script>