import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import useEventFetch from '@/lib/hooks/useEventFetch'
import { userUpdate } from '@/Api/user'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { useSelector } from '@/redux/context'

interface IProps {
	item: {
		title: string
		field: string
		placeholder?: string
	}
}

const setFocus = (id: string) => {
	const input = document.getElementById(id)
	input && input.focus()
}

const InfoGroup: React.FC<IProps> = ({ item: { field, title, placeholder } }) => {
	// 是否为编辑状态
	const { user = {} } = useSelector()
	console.log(user)

	const [ editFlag, setEditFlag ] = useState(false)
	const { value, onInputEvent, setValue } = useInputEvent('')
	console.log({ field, value }, user[field])
	const { onEvent: onSave } = useEventFetch(
		() =>
			userUpdate({
				[field]: value
			}),
		[ value ]
	)

	useEffect(
		() => {
			setValue(user[field])
		},
		[ user[field] ]
	)

	return (
		<Wrapper>
			<span className="item-title">{title}</span>
			<div className="input-box">
				<input
					id={field}
					className="input"
					placeholder={placeholder || '填写你的' + title}
					onFocus={() => setEditFlag(true)}
					value={value}
					onChange={onInputEvent}
				/>
				{/* 输入框右侧根据编辑状态显示不同按钮 */}
				{editFlag ? (
					<div className="edit-box" onClick={() => setEditFlag(false)}>
						<button className="confirm-btn" onClick={() => onSave()}>
							保存
						</button>
						<button className="cancel-btn">取消</button>
					</div>
				) : (
					<div
						className="edit-box"
						onClick={() => {
							setEditFlag(true)
							setFocus(field)
						}}
					>
						<button className="edit-btn">
							<i className="edit-icon" />
							<span>修改</span>
						</button>
					</div>
				)}
			</div>
		</Wrapper>
	)
}

export default InfoGroup
