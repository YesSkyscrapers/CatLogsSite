import "./Select.css"
import DownArrowImage from '../../images/down_arrow.png'
import { useState } from "react"

const Select = ({
    onChange,
    options,
    value,
    selectContainerClassName,
    emptyTitle,
    emptyOption
}) => {

    let [isOpen, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(true)
    }

    const onSelect = (option) => {
        onChange(option)
        setOpen(false)
    }

    const onClose = () => {
        setOpen(false)
    }

    const _emptyTitle = emptyTitle ? emptyTitle : "Любой"
    const _emptyOption = emptyOption ? emptyOption : "Любой"

    const _options = [{ value: null, label: _emptyOption }].concat(options)

    const title = options.find(option => option.value == value?.value)?.label

    return (
        <div className={`SelectContainer ${selectContainerClassName}`}>
            <div onClick={onOpen} className="SelectTitle">
                <div>
                    {title ? title : _emptyTitle}
                </div>
                <div className="SelectTitleArrow">
                    <img src={DownArrowImage} className="DownArrow" />
                </div>
            </div>
            {
                isOpen && (
                    <div onClick={() => onClose()} className="OverlayCheats" />
                )
            }
            {
                isOpen && (
                    <div className="OverlayDropdown">
                        <div className="OverlayDropdownContainer">
                            {
                                _options.map(option => {
                                    return (
                                        <div key={option.value} onClick={() => onSelect(option)} className="OverlayDropdownLabel">
                                            {option.label}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Select