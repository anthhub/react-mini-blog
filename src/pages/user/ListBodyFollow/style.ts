import styled from 'styled-components'
import dotPic from '../../../statics/dot.svg'
import dotHoverPic from '../../../statics/dot-hover.svg'

export const Wrapper = styled.div`
  background: #fff;

  .list-item {
    :not(:last-child) {
      border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    }

    .user-link {
      display: flex;
      align-items: center;
      padding: 6px 29px;
      min-height: 84px;

      .avatar {
        flex: 0 0 auto;
        margin-right: 20px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #eee;
      }

      .info-box {
        flex: 1 1 auto;
        min-width: 0;

        .username {
          font-size: 16px;
          font-weight: 600;
          color: #2e3135;
        }

        .detail {
          margin-top: 7px;
          font-size: 12px;
          font-weight: 500;
          color: #b9c0c8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .follow-btn {
        outline: none;
        flex: 0 0 auto;
        margin-left: 12px;
        padding: 0;
        width: 90px;
        height: 30px;
        font-size: 12px;
        color: #92c452;
        background-color: #fff;
        border: 1px solid #92c452;
        border-radius: 2px;

        :hover {
          opacity: 0.8;
        }

        &.followed {
          color: #fff;
          background-color: #92c452;
        }
      }
    }
  }
`
