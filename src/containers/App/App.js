import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Login from './../Login/Login';
import { logoutUser } from './../../actions/auth';
import { Link } from 'react-router';
import './App.scss';
import { Menu, Breadcrumb, Dropdown, Affix, BackTop, Popconfirm, Icon } from 'antd';
import UserAvatar from './avatar.png';
const SubMenu = Menu.SubMenu;


class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object,
    logoutUser: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
  }

  logout() {
    this.props.logoutUser();
  }

  renderAuthenticatedPage() {
    const userMenu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">个人资料</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">修改密码</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" >
          <Popconfirm title="确定要退出登录吗?" placement="bottom" onConfirm={this.logout} okText="确定" cancelText="取消">
            <a href="#">退出登录</a>
          </Popconfirm>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">
            车车管理平台
          </div>
          <Menu mode="inline" theme="dark"
            defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            <SubMenu key="sub1" title={<span><i className="fa fa-user" />订单管理</span>}>
              <Menu.Item key="1">
                <Link to={'/users'}>
                  订单列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">角色配置</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="user" />用户管理</span>}>
              <Menu.Item key="1">
                <Link to={'/users'}>
                  用户列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">角色配置</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="user" />用户管理</span>}>
              <Menu.Item key="1">
                <Link to={'/users'}>
                  用户列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">角色配置</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="user" />用户管理</span>}>
              <Menu.Item key="1">
                <Link to={'/users'}>
                  用户列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">角色配置</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="user" />用户管理</span>}>
              <Menu.Item key="1">
                <Link to={'/users'}>
                  用户列表
                </Link>
              </Menu.Item>
              <Menu.Item key="2">角色配置</Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <Affix>
            <div className="ant-layout-header">
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a className="ant-dropdown-link user-menu" href="#">
                  <img src={UserAvatar} /> 哈哈哈 <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </Affix>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
              <Breadcrumb.Item>用户列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <BackTop />
          <div className="ant-layout-footer">
          Powered By Ant Design 2016版权所有 ©
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated? this.renderAuthenticatedPage() : <Login/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { routing, auth: { isAuthenticated, user } } = state;
  return {
    isAuthenticated, user,routing
  };
}

function mapDispatchToProps (dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
