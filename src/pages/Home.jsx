import { All, Month, Name, Percentage } from "../assets/styled/homeStyled/monthStyled";
import NavBar from "../components/Navbar";

export default function Home() {

    return (
        <All>
            <NavBar />
            <Month>
                <Name>
                    mes
                </Name>
                <Percentage>
                    %
                </Percentage>
            </Month>
            <Month>
                <Name>
                    mes
                </Name>
                <Percentage>
                    %
                </Percentage>
            </Month>
            <></>

        </All>

    );
}
