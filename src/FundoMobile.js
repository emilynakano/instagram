export default function FundoMobile() {
    return (
        <div class="fundo-mobile">
            {items.map((item) => <ion-icon name={item}></ion-icon>)}
        </div>
    )
}
const items = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
items.map((item) => <ion-icon name={item}></ion-icon>)