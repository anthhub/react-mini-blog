// import styled from 'styled-components';

// export const Wrapper = styled.div`

// `

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 700px;
  padding: 24px 24px 0;
  margin-bottom: 36px;

  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .author-info {
      display: flex;
      align-items: center;

      .avatar {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        border-radius: 50%;
        background: ${({ avatarLarge }) => `#eee url(${avatarLarge}) no-repeat center/cover`};
      }

      .author-name {
        font-size: 16px;
        font-weight: 700;
        color: #333;
      }

      .article-info {
        display: flex;
        margin-top: 4px;
        font-size: 13px;
        color: #909090;

        .views {
          margin-left: 7px;
        }

        .dot {
          margin: 0 6px;
        }

        .edit-btn {
          color: #1264b6;
          cursor: pointer;
          :hover {
            text-decoration: underline;
          }
        }
      }
    }

    .follow-btn {
      outline: none;
      width: 55px;
      height: 26px;
      font-size: 13px;
      color: #6cbd45;
      border: 1px solid #6cbd45;
      border-radius: 2px;
      background: #fff;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }

      &.followed {
        color: #fff;
        background-color: #6cbd45;
      }
    }
  }

  .cover-img {
    display: ${({ screenshot }: { screenshot: string; avatarLarge: string }) => (screenshot ? 'block' : 'none')};
    margin-bottom: 24px;
    width: 100%;
    height: 367px;
    background: ${({ screenshot }) => `#fff url(${screenshot}) no-repeat center/cover`};
  }

  .article-title {
    margin: 20px 0;
    line-height: 1.5;
    font-size: 30px;
    font-weight: 700;
    color: #333;
  }
`
