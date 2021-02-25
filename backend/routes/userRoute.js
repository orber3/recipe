import { OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client('804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com')

server.post("/api/auth/google", async (req, res) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: 804267482082-d6nsm6snr43b6v7be897fdii1pht6uc6.apps.googleusercontent.com
    });
    const { name, email, picture } = ticket.getPayload();    
    const user = await db.user.upsert({ 
        where: { email: email },
        update: { name, picture },
        create: { name, email, picture }
    })
    res.status(201)
    res.json(user)
})