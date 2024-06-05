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
      <div>訂單資訊</div>
      <div className='info'>
        <DialogTrigger type='popover' placement='left bottom'>
          <ActionButton>帳號管理 ▾</ActionButton>
          <Dialog>
            <Content UNSAFE_className='info-content'>
              <Tabs>
                <TabList>
                  <Item key='version'>版本號</Item>
                  <Item key='account'>帳密</Item>
                </TabList>
                <TabPanels>
                  <Item key='version'>V1.0.0</Item>
                  <Item key='account'>
                    <div>帳號: {accountInfo.account}</div>
                    <div>
                      密碼:{' '}
                      {accountInfo.password.slice(0, 1) +
                        '****' +
                        accountInfo.password[accountInfo.password.length - 1]}
                    </div>
                  </Item>
                </TabPanels>
              </Tabs>
            </Content>
          </Dialog>
        </DialogTrigger>
      </div>
    </div>
  )
}

export default Main
