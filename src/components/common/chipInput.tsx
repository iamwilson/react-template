// core
import React from 'react';
import update from 'react-addons-update';

interface IChipProps {
	chips: any;
	max: any;
	maxlength?: Number;
	placeholder: string;

	getData: (data?: any) => void;
}

interface IChipState {
	data: any;
	INVALID_CHARS: any;
	KEY: any;
}

class ChipInput extends React.Component<IChipProps, IChipState> {
	constructor(props: IChipProps) {
		super(props);
		this.state = {
			data: [],
			KEY: {
				backspace: 8,
				enter: 13,
				tab: 9,
			},
			INVALID_CHARS: /[^a-zA-Z0-9 ]/g,
		};
	}

	componentDidMount() {
		this.setChips(this.props.chips);
	}

	componentDidUpdate(prevProps: { chips: any }, prevState: any, snapshot: any) {
		if (prevProps.chips != this.props.chips) {
			this.setState({ data: this.props.chips });
		}
	}

	setChips = (chips: any) => {
		if (chips && chips.length) this.setState({ data: chips });
	};

	onKeyDown = (event: any) => {
		const keyPressed = event.which;

		if (keyPressed === this.state.KEY.enter || (keyPressed === this.state.KEY.tab && event.target.value)) {
			event.preventDefault();
			this.updateChips(event);
		} else if (keyPressed === this.state.KEY.backspace) {
			const chips = this.state.data;

			if (!event.target.value && chips.length) {
				this.deleteChip(chips[chips.length - 1]);
			}
		}
	};

	clearInvalidChars = (event: any) => {
		const value = event.target.value;

		if (this.state.INVALID_CHARS.test(value)) {
			event.target.value = value.replace(this.state.INVALID_CHARS, '');
		} else if (value.length > this.props.maxlength) {
			event.target.value = value.substr(0, this.props.maxlength);
		}
	};

	deleteChip = (chip: any[]) => {
		const index = this.state.data.indexOf(chip);
		this.setState(
			{
				data: this.state.data.filter((_, i) => i !== index),
			},
			() => {
				this.props.getData(this.state.data);
			}
		);
	};

	focusInput = (event: any) => {
		const children = event.target.children;

		if (children.length) children[children.length - 1].focus();
	};

	updateChips = (event: any) => {
		if (!this.props.max || this.state.data.length < this.props.max) {
			const value = event.target.value;

			if (!value) return;

			const chip = value.trim().toLowerCase();

			if (chip && this.state.data.indexOf(chip) < 0) {
				this.setState(
					{
						data: update(this.state.data, {
							$push: [chip],
						}),
					},
					() => {
						this.props.getData(this.state.data);
					}
				);
			}
		}

		event.target.value = '';
	};

	render() {
		const chips = this.state.data.map((chip, index) => {
			return (
				<span className='chip' key={index}>
					<span className='chip-value'>{chip}</span>
					<button type='button' className='chip-delete-button' onClick={this.deleteChip.bind(null, chip)}>
						<em className='fa fa-times-circle' aria-hidden='true'></em>
					</button>
				</span>
			);
		});

		const placeholder = !this.props.max || chips.length < this.props.max ? this.props.placeholder : '';

		return (
			<div className='chips' onClick={this.focusInput}>
				{chips}
				<input
					type='text'
					className='chips-input'
					placeholder={placeholder}
					onKeyDown={this.onKeyDown}
					onKeyUp={this.clearInvalidChars}
				/>
			</div>
		);
	}
}

export default ChipInput;
