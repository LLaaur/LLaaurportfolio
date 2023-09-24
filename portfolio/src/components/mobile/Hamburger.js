export default function Hamburger({ isOpen }){
    return(
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx>{`
                .hamburger{
                    margin-top: 5rem;
                    width: 85rem;
                    height: 5rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: end;
                    flex-flow: column nowrap;
                }

                .burger{
                    width: 6rem;
                    height: 0.50rem;
                    border-radius: 10px;
                    background-color: white;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }

                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                }

                
            `}</style>
        </>
    )
}