<template>
    <div>
        <ul id="messages">
            <li v-for="item in list">{{item}}</li>
        </ul>
        <form action="">
            <button @click="submitForm()">Send</button>
            <div class="inputwrap"><input v-model="m" autocomplete="off" /></div>
        </form>
    </div>
</template>

<script>
    import io from 'socket.io-client';
    var socket = io('http://localhost:5001');

    export default {
        data () {
            return {
                data:"",
                name:"",
                list:[],
                m:""
            }
        },
        watch: {

        },
        created:function () {

        },
        mounted:function () {
            socket.on('chat message', (data)=>{
                let name = data.name === "null"?"匿名":data.name;
                this.list.push((name || "匿名") + ":" + data.msg);
            });
        },
        methods: {
            submitForm(){
                socket.emit('chat message', {
                    msg :this.m,
                    name : this.name
                });
                this.m = "";
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font: 13px Helvetica, Arial;padding-bottom: 50px }
    form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
    .inputwrap{padding-right: 114px;}
    form input { border: 0;display: block; padding: 10px;  margin-right: .5%;width: 100%; }
    form button {width:100px; float: right; background: rgb(130, 224, 255); border: none; padding: 10px; }
    #messages { list-style-type: none; margin: 0 0 ; padding: 0; }
    #messages li { padding: 5px 10px; }
    #messages li:nth-child(odd) { background: #eee; }
</style>
