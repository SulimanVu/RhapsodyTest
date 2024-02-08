import { IGood, useGetGoodsQuery } from "@/redux/query/goods";
import UseAppSelector from "@/hooks/UseAppSelector";
import AddUser from "uno/AddUser";
import styled from "@emotion/styled";

const Header = () => {
  const clients = UseAppSelector((state) => state.client.clients);

  const { data: goodsData = [], isLoading: goodsLoading } = useGetGoodsQuery<{
    data: IGood[];
    isLoading: boolean;
  }>({ data: [], isLoading: false });

  const Main = styled.div`
    width: 100%;
    display: flex;
    gap: 50px;
  `;

  const ListBlock = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
  `;

  if (goodsLoading || !clients) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <ListBlock>
        <span>app goods:</span>
        <div style={{ width: 200 }}>
          {goodsData.map((good) => (
            <span key={good.id}>{good.name}</span>
          ))}
        </div>
      </ListBlock>
      <ListBlock>
        <div>
          <span>app shell users:</span>
          <div style={{ width: 200, wordWrap: "break-word" }}>
            {clients.map((client: any) => (
              <span key={client.id}>{client.name}</span>
            ))}
          </div>
        </div>
        <div style={{ width: 200, wordWrap: "break-word" }}>
          <AddUser />
        </div>
      </ListBlock>
    </Main>
  );
};

export default Header;
