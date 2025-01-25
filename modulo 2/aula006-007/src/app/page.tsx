import { Person } from "@/components/Person"

const Page = () => {
  return (
    <div>
        <Person
        name='elon musk'
        avatar='https://w7.pngwing.com/pngs/484/293/png-transparent-elon-musk.png'
        roles={['CEO SpaceX', 'CEO Tesla', 'CEO X']}
        />
        <Person
        name='jeff bezos'
        avatar='https://s2-g1.glbimg.com/EioX1SZioiW1vot-IWHrBT8icNA=/0x0:4000x2667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/R/n/5NGc1UQrW0EAuCERdIlg/ap21306397815149.jpg'
        roles={['CEO Amazon', 'CEO']}
        />
    </div>
  )
}

export default Page