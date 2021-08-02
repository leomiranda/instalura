import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get'

const ButtonGhost = css`
	color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
	background: transparent;
`

const ButtonDefault = css`
	color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
	background-color: ${(props) =>
		get(props.theme, `colors.${props.variant}.color`)};
`

export const Button = styled.button`
	border: 0;
	cursor: pointer;
	padding: 12px 26px;
	font-weight: bold;
	opacity: 1;
	border-radius: 8px;

	${function (props) {
		if (props.ghost) {
			return ButtonGhost
		}
		return ButtonDefault
	}}
	&:hover,
	&:focus {
		opacity: 0.5;
	}
`
