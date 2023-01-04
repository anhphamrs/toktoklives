let appID = "be406a7b089842edad82c300a6cf2af1"

let token = null
let uid = String(Math.floor(Math.random() * 1232))

let roomsData = {}

let initate = async () => {
    let rtmClient = await AgoraRtm.createInstance(appID)
    await rtmClient.login({uid, token})

    let lobbyChannel = await rtmClient.createChannel()
    await lobbyChannel.join()

    rtmClient.on('MessageFormPeer', async (message, peerId) => {
        let messageData = JSON.parse(message.text)
        console.log('Message from room member')
    })

}
initate()