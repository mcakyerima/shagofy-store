import getBillboard from "@/action/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("1185acfe-b66c-48ff-b923-d981d23cfd89")
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
     );
}
 
export default HomePage;