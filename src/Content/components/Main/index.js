import {
  Dialog,
  ActionButton,
  DialogTrigger,
  Content,
  Tabs,
  TabList,
  TabPanels,
  Item,
} from '@adobe/react-spectrum'
import './index.css'

function Main() {
  const accountInfo = JSON.parse(localStorage.getItem('token'))

  return (
    <div className='main'>
      <DialogTrigger type='popover'>
        <ActionButton>下拉選單 ▾</ActionButton>
        <Dialog>
          <Content>
            <Tabs>
              <TabList>
                <Item key='version'>版本號</Item>
                <Item key='account'>帳密</Item>
              </TabList>
              <TabPanels>
                <Item key='version'>V1.0.0</Item>
                <Item key='account'>
                  <div>帳號: {accountInfo.account}</div>
                  <div>密碼: {accountInfo.password}</div>
                </Item>
              </TabPanels>
            </Tabs>
          </Content>
        </Dialog>
      </DialogTrigger>
    </div>
  )
}

export default Main
